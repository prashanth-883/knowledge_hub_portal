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
        <div onClick={handleClick} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer h-full">
            <div className="relative h-48 w-full bg-gray-50 overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 mix-blend-multiply" />
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">{title}</h3>
            </div>
        </div>
    );
};

export default TopicCard;
