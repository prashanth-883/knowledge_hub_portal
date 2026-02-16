import TopicCard from './TopicCard';

const topics = [
    {
        title: 'Java Programming',
        image: '/images/java.png',
        href: '/topics/java'
    },
    {
        title: 'C Programming',
        image: '/images/user_html.jpg',
        href: '/topics/c'
    },
    { title: 'C++', image: '/images/c++.jpg', href: '/topics/cpp' },
    { title: 'Python', image: '/images/python.jpg', href: '/topics/python' },
    { title: 'JavaScript', image: '/images/js.jpg', href: '/topics/javascript' },
    { title: 'HTML5', image: '/images/user_c.jpg', href: '/topics/html5' },
    { title: 'CSS3', image: '/images/user_aptitude.jpg', href: '/topics/css3' },
    { title: 'Aptitude', image: '/images/user_css.jpg', href: '/topics/aptitude' },
];

const TopicGrid = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topics.map((topic, index) => (
                    <TopicCard
                        key={topic.title}
                        title={topic.title}
                        image={topic.image}
                        href={topic.href}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopicGrid;
