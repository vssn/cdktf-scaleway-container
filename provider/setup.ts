import { CloudProvider, ProviderConfig } from "../types";
import { TerraformStack } from "cdktf";

export async function setupAws(
  context: TerraformStack,
  config: ProviderConfig
) {
  const {
    Provider,
    credentials
  } = await import("./scaleway");

  const provider = new Provider(context, "scaleway", {
    region: config.region,
    accessKey: credentials.accessKey,
    secretKey: credentials.secretKey,
  });

  return {
    provider,
  } as CloudProvider;
}