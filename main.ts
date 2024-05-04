import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack } from "cdktf";
import { Provider, credentials, Container, ContainerNamespace } from "./provider/scaleway";
import { NAMESPACE_NAME, PROJECT_ID, CONTAINER_OPTIONS } from "./env.json";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Provider(this, "scaleway", credentials);

    const containerNamespace = new ContainerNamespace(this, "container-namespace", {
      name: NAMESPACE_NAME,
      projectId: PROJECT_ID,
      description: "Scaleway Serverless Container Namespace"
    })
    
    const container = new Container(this, "container", {
      name: `deployment-${Number(new Date()).toString(36)}`,
      description: "Created as a basic container image deployment on scaleway",
      namespaceId: containerNamespace.id,
      
      registryImage: `${CONTAINER_OPTIONS.REPOSITORY}${CONTAINER_OPTIONS.IMAGE}`,
      port: CONTAINER_OPTIONS.PORT,
      cpuLimit: 70,
      memoryLimit: 128,
      maxScale: 1,
      minScale: 1,
      deploy: true,
    });

    new TerraformOutput(this, "my-domain", {
      value: container.domainName,
    });
  }
}

const app = new App();
new MyStack(app, "cdktf-scaleway-container");
app.synth();
