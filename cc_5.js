const employees = [
    {name: "Nic", hourlyRate: 26, hoursWorked: 37},
    {name: "Austin", hourlyRate: 22, hoursWorked: 45},
    {name: "Cierra", hourlyRate: 30, hoursWorked: 50},
    {name: "Jeremiah", hourlyRate: 22, hoursWorked: 40},
    {name: "Hannah", hourlyRate: 19, hoursWorked: 48}
];
function calculateBasePay(rate,hours) {
    const baseHours = Math.min(hours, 40);
    return rate *baseHours;
}
function calculateOvertimePay(rate,hours) {
    const overtimeHours = Math.max(0, hours - 40);
    return overtimeHours * rate * 1.5;
}
function calculateTaxes(grossPay){
    return grossPay * 0.15;
}
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay+overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;
    return {
        name: employee.name,
        basePay: currencyFormatter.format(basePay),
        overtimePay: currencyFormatter.format(overtimePay),
        grossPay: currencyFormatter.format(grossPay),
        netPay: currencyFormatter.format(netPay)
    };
}
for (const emp of employees) {
    const payroll = processPayroll(emp);
    console.log(payroll);
}