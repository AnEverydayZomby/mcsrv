import { AxiosResponse } from "axios";

declare namespace ServerStatus {
    type Status = Offline | Online;

    interface Offline {
        ip: string;
        port: string;
        debug: {
            ping: boolean;
            query: boolean;
            srv: boolean;
            querymismatch: boolean;
            ipinsrv: boolean;
            cnameinsrv: boolean;
            animatedmotd: boolean;
            cachetime: number;
            apiversion: number;
        };
        hostname: string;
        online: boolean;
    }

    interface Online extends Offline {
        motd: {
            raw: string[];
            clean: string[];
            html: string[];
        };
        players: {
            online: number;
            max: number;
        };
        version: string;
        online: boolean;
        protocol: number;
        icon: string;
        software: string;
        map: string;
        mods?: {
            names: string[];
            raw: {
                [key: string]: string
            }
        }
    }
}

/**
 * An interface to the Minecraft Server Status API.
 * @param address The server address to lookup.
 * @example
 * ```
 * const mcsrv = require("mcsrv");
 *
 * mcsrv("mc.hypixel.net");
 * //=> { online: true, ... }
 * ```
 */
declare function mcsrv(address: string): Promise<ServerStatus.Status | AxiosResponse>;

export = { mcsrv };
