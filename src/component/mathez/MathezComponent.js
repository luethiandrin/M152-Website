import * as React from 'react';

import f1 from '../../resource/mathez/default/f1.jpg';
//import f1Edited from '../../resource/mathez/edited/TODO';
import f2 from '../../resource/mathez/default/f2.jpg';
//import f2Edited from '../../resource/mathez/edited/TODO';
import f3 from '../../resource/mathez/default/f3.jpg';
//import f3Edited from '../../resource/mathez/edited/TODO';

import ImageComponent from '../shared/ImageComponent';

export default function LüthiComponent() {
    const f1Text = "In diesem Bild sieht man das Berner Münster, welches sich am Münsterplatz befindet. Der etwas dunkler erscheinende Berg im Hintergrund bildet, mit den Wolken zusammen, einen schönen Kontrast zum eher hell gefärbten Münster."
    const f2Text = "In diesem Bild sieht man einen weiteren Wassersprinkler, welcher sich im Erdgeschoss des IET Gebäudes befindet. Die Aufnahme mit dem farbenfrohen Hintergrund der Wohnhäuser gleicht die eintönigen Farben des Objektes aus."
    const f3Text = "In diesem Bild sieht man Moos auf einem Stein, welches sich vor der Tiefgarage der GIBB befindet. Es ist ein beruhigendes Bild meiner Meinung nach und der Baum im Hintergrund gleicht das Bild aus."

    return (
        <div>
            <ImageComponent image={f1} editedImage={f1Edited} description={f1Text} initX='4912' initY='3688'/>
            <ImageComponent image={f2} editedImage={f2Edited} description={f2Text} initX='4912' initY='3688'/>
            <ImageComponent image={f3} editedImage={f3Edited} description={f3Text} initX='4912' initY='3688'/>
        </div>
    )
}
