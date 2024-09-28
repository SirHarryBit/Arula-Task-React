import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";

interface Benefit {
    icon: any;
    title: string;
    description: string;
}

const BenefitCard = (benefit: Benefit) => {
    return (
        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <div className="mx-auto bg-teal-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle>{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{benefit.description}</p>
            </CardContent>
        </Card>
    );
};

export default BenefitCard;
