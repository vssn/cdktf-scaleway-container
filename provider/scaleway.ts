import {ScalewayProvider} from "../.gen/providers/scaleway/provider"
import {Container} from "../.gen/providers/scaleway/container"

import {ACCESS_KEY, SECRET_KEY} from '../env.json'

const Provider = ScalewayProvider;

const credentials = {
  accessKey: ACCESS_KEY,
  secretKey: SECRET_KEY
}

export {
  Provider,
  credentials,
  Container,
};