import Header from './header';
import Image from './image';
import Actions from './actions';
import Footer from './footer';
import Comments from './comments';

export default function Post({ content }) {
    return (
        <div className="rounded col-span-4 border bg-white-100 mb-16">
            <Image src={content.imageSrc} caption={content.caption} />
        </div>
    )
}