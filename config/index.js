import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`; //this line will generate the your machine ip automatically

// const response = await fetch(`${uri}/something`);
export default {
    API_URL: uri
}