import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { Provider, credentials, Container } from "./provider/scaleway";
import { NAMESPACE_ID, CONTAINER_PATH, PROVIDER } from "./env.json";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    if (PROVIDER === "scaleway") {
      new Provider(this, PROVIDER, credentials);
      const container = new Container(this, "container", {
        name: `deployment-${Number(new Date).toString(36)}`,
        description: 'Created with circlico formula: static-node-container',
        namespaceId: NAMESPACE_ID,
        registryImage: CONTAINER_PATH,
        port: 80,
        cpuLimit: 70,
        memoryLimit: 128,
        maxScale: 1,
        minScale: 1,
        deploy: true,
      });

      console.log(container)
    }
  }
}

const app = new App();
new MyStack(app, "cdktf-scaleway-container");
app.synth();
