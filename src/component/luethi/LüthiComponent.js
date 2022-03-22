import * as React from 'react';

import f1 from '../../resource/luethi/f1.jpg';
import f2 from '../../resource/luethi/f2.jpg';
import f3 from '../../resource/luethi/f3.jpg';

import ImageComponent from '../shared/ImageComponent';

export default function LüthiComponent() {
    const f1Text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    const f2Text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    const f3Text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

    return (
        <div>
            <ImageComponent image={f3} description={f3Text}/>
            <ImageComponent image={f2} description={f2Text}/>
            <ImageComponent image={f1} description={f1Text}/>
        </div>
    )
}
