import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`; //this line will generate the your machine ip automatically
const uris = `http://${manifest.debuggerHost.split(':').shift()}:5000/server`;
const uriStats = `http://${manifest.debuggerHost.split(':').shift()}:5000/statistics`; 

// const response = await fetch(`${uri}/something`);
export default {
    API_URL: uri,
    API_URL_server:uris,
    API_URL_statistics:uriStats
}