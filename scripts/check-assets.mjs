import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(
  await readFile(path.join(root, "docs/asset-manifest.json"), "utf8"),
);
for (const asset of manifest.assets) {
  const file = path.resolve(root, asset.file);
  if (!file.startsWith(path.join(root, "public", "assets") + path.sep))
    throw new Error(`Asset outside public/assets: ${asset.file}`);
  const bytes = await readFile(file);
  if (createHash("sha256").update(bytes).digest("hex") !== asset.sha256)
    throw new Error(
      `Asset hash changed; review and update the manifest: ${asset.file}`,
    );
  if (
    file.endsWith(".svg") &&
    /flowly|<script|<foreignobject/i.test(bytes.toString("utf8"))
  )
    throw new Error(
      `Unexpected old branding or active SVG content: ${asset.file}`,
    );
}
const blueprint = await readFile(
  path.join(root, "docs/reference/jerico-studio-jeriflow-blueprint.html"),
);
if (
  createHash("sha256").update(blueprint).digest("hex") !==
  "e1dfdc4b12babc788f68b82faa3d94bce3f398d8183a4013506e0bda66e14619"
)
  throw new Error(
    "Preserved source blueprint no longer matches its original hash.",
  );
console.log(
  `${manifest.assets.length} local assets and the original blueprint passed integrity checks.`,
);
