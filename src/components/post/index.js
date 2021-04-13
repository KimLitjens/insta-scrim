import Header from './header';
import Image from './image';
import Actions from './actions';
import Footer from './footer';
import Comments from './comments';

export default function Post({ content }) {
    // rounded, span across 4, border (gray), margin-bottom 16, white bg
    return (
        <div className="rounded col-span-4 border bg-white mb-16">
            <p>I am going to be a styled div!</p>
        </div>
    )
}