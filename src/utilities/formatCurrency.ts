const CURRENCY_FORMATTER = Intl.NumberFormat(undefined, {
    currency: "DKK", style: "currency"}
)

export function formatCurrency(number:number){
    return CURRENCY_FORMATTER.format(number)

}