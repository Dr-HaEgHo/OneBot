declare module "fb" {
    export function init(params: { appId: string; version: string }): void;
    export function login(callback: (response: any) => void, options?: any): void;
    export function logout(callback: (response: any) => void): void;
    // Add more declarations as needed
  }