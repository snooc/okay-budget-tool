import Hapi from "hapi";

class Server {
	constructor(host, port) {
		this.config = {
			host: host,
			port: port
		};

		this._validateConfig();
		this._initServer();
	}

	start() {
		this.server.start(() => {
			console.log("Started server at %s:%d", this.config.host, this.config.port);
		});
	}

	_initServer() {
		this.server = new Hapi.Server();
		this.server.connection({
			host: this.config.host,
			port: this.config.port
		});
	}

	_validateConfig() {
		if (typeof this.config.host !== "string" || this.config.host.length == 0) {
			throw new Error("Must have a valid host to bind to.");
		}

		if (typeof this.config.port !== "number") {
			throw new Error("Must have a valid port to bind to.");
		}
	}
}

export default Server;
