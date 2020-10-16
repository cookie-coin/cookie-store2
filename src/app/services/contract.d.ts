declare module 'contract' {

  export class Contract {
    totalSupply(): ContractMethod<EthNumber>;

    balanceOf(ownerAddress: string): ContractMethod<EthNumber>;

    transfer(recipientAddress: string, value: string): ContractMethod<boolean>;

    cookieMonsterCount(): ContractMethod<EthNumber>;

    CookiesShared(): ContractMethod<string>;

    Transfer(): ContractMethod<string>;

    at(address: string): Promise<Contract>;
  }

  export namespace Contract {
    namespace address {
      function fromHex(e: any): any;

      function fromPrivateKey(e: any): any;

      function toHex(e: any): any;
    }
  }

  export class ContractMethod<T> {
    call(): Promise<T>;

    send(): Promise<T>;

    watch(event: (err, event) => void);
  }

  export namespace ContractMethod {
  }

  export class EthNumber {
    _hex: string;
    _ethersType: string;
  }

  export default Contract;
}
