export class Wallet implements WalletInterface {
    cryptoName: string = ""
    Price: string = ""
    PriceMovement1d: number = 0
    montant: string = ""
    amount: string = ""


    constructor(
        cryptoName: string = "",
        Price: string = "",
        PriceMovement1d: number = 0,
        montant: string = "",
        amount: string = ""
    ) {
        this.cryptoName = cryptoName;
        this.Price = Price;
        this.PriceMovement1d = PriceMovement1d;
        this.montant = montant;
        this.amount = amount;
    }
}



interface WalletInterface {
    cryptoName: string
    Price: string
    PriceMovement1d: number
    montant: string
    amount: string
}