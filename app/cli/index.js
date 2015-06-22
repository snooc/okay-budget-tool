import pkg from "../../package.json";
import program from "commander";
import Server from "../server";

function startServer(host, port) {
	try {
		var s = new Server(host, port);
		s.start();
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
}

program.version(pkg.version);

program
	.command("start")
	.alias("s")
	.description("start application server")
	.option("-h, --host <host>", "Host to bind server on", String, "127.0.0.1")
	.option("-p, --port <port>", "Port to bind server on", Number, 4000)
	.action(function(cmd) {
		startServer(cmd.host, cmd.port);
	})
	.on("--help", function() {
		console.log("  Example:");
		console.log();
		console.log("    $ obt start --port 4000");
		console.log();
	});

program.parse(process.argv);
