# Deploy a container to Scaleway Serverless Container Plattform

This is work in progress, if you want to check it out do the following:

## Install
1. Install cdktf and terraform from Hashicorp:
   https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-install
2. Check out the repo and npm install
3. You need a Scaleway account and an API Key. Create one
4. Find the env.json.change-me file, update it with your Scaleway credentials and your Scaleway Project ID. 
   You can find the Project ID in your Scaleway "Project Dashboard" under "Settings"
5. Rename the file to env.json
6. Execute:

npm run get

npm run synth

npm run deploy
