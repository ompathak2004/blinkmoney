interface Config {
    API_BASE_URL: string
}

export const config: Config = {
    API_BASE_URL: 'https://prod.blinkmoney.in/api',
}

// FAQ Data
export interface FaqItem {
    question: string;
    answer: string;
}

export const FAQ_DATA: FaqItem[] = [
    {
        question: "What is BlinkMoney?",
        answer: "BlinkMoney is a platform that allows you to get instant credit against your mutual fund investments without having to redeem them.",
    },
    {
        question: "Who is eligible for BlinkMoney?",
        answer: "Any individual who holds mutual fund investments and meets our credit criteria is eligible to apply for BlinkMoney services.",
    },
    {
        question: "What mutual funds are eligible?",
        answer: "Most equity and debt mutual funds are eligible for pledging. We accept mutual funds from all major fund houses registered in India.",
    },
    {
        question: "What documents are required to apply?",
        answer: "You'll need valid government-issued ID proof, PAN card, bank account details, and your mutual fund portfolio statements.",
    },
    {
        question: "How much can I borrow?",
        answer: "You can typically borrow up to 50-80% of the value of your pledged mutual fund investments, depending on the fund type and market conditions.",
    },
    {
        question: "What are the interest rates?",
        answer: "Our interest rates are competitive and vary based on the loan amount, tenure, and type of mutual funds pledged. Contact us for current rates.",
    },
    {
        question: "Do I have to pay interest on the entire credit line?",
        answer: "No, you only pay interest on the amount you actually use, not on the entire credit line available to you.",
    },
    {
        question: "What is lien marking/pledging of mutual funds?",
        answer: "Lien marking is the process of pledging your mutual funds as collateral for the loan. Your funds remain in your name but are marked as pledged.",
    },
    {
        question: "Can I still get returns on my pledged investments?",
        answer: "Yes, your mutual funds continue to remain invested and you continue to receive returns even when they are pledged as collateral.",
    },
    {
        question: "Do I have to pay EMIs?",
        answer: "EMI payment terms are flexible. We offer various repayment options including bullet payment and EMI structures based on your preference.",
    },
];

// Contact Information
export const CONTACT_INFO = {
    whatsapp: {
        phone: "9004311470",
        url: "https://wa.me/9004311470",
        availability: "Available between 10 AM to 6 PM",
    },
    email: {
        address: "support@blinkmoney.in",
        responseTime: "Get reply under 30 minutes",
    },
};
