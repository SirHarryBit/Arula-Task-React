import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface Therapist {
    id: number;
    image: string;
    name: string;
    experience: string;
    price: string;
    specialties: string[];
    languages: string[];
}

const TherapistCard = (therapist: Therapist) => {
    return (
        <Card key={therapist.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={therapist.image} className='object-cover' alt={therapist.name} />
                        <AvatarFallback>{therapist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-teal-700">{therapist.name}</CardTitle>
                        <p className="text-sm text-gray-500">{therapist.experience} of experience</p>
                        <p className="text-sm text-gray-500">Speaks: {therapist.languages.join(', ')}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className=" flex-row flex-wrap gap-2 mb-2">
                    <p className="text-sm text-black">Speciality:</p>
                    {therapist.specialties.map(specialty => (
                        <Badge key={specialty} variant="secondary" className="bg-teal-100 text-teal-700">{specialty}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full transition-colors duration-300">Book A Session</Button>
            </CardFooter>
        </Card>
    );
};

export default TherapistCard;
