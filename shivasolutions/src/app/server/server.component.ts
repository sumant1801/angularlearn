import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    severName: string = "Shiv";

    getServerStatus() {
        this.serverId++;
        return this.severName;
    }
}