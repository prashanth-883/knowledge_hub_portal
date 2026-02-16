import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

interface TopicCardProps {
    title: string;
    image: string;
    href: string;
    author?: string;
}

const TopicCard = ({
    title,
    image,
    href
}: TopicCardProps) => {
    const { user } = useAuth();
    const router = useRouter();

    const handleClick = () => {
        if (!user) {
            router.push('/login');
        } else {
            router.push(href);
        }
    };

    return (
        <div onClick={handleClick} className="group cursor-pointer h-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow flex flex-col">
                <div className="relative h-48 w-full bg-gray-50">
                    <Image src={image} alt={title} fill className="object-cover" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default TopicCard;
