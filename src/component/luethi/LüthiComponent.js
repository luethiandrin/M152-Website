import * as React from 'react';

import f1 from '../../resource/luethi/default/f1.jpg';
import f1Edited from '../../resource/luethi/edited/f1-edited.jpg';
import f2 from '../../resource/luethi/default/f2.jpg';
import f2Edited from '../../resource/luethi/edited/f2-edited.jpg';
import f3 from '../../resource/luethi/default/f3.jpg';
import f3Edited from '../../resource/luethi/edited/f3-edited.jpg';

import ImageComponent from '../shared/ImageComponent';

export default function LüthiComponent() {
    const f3Text = "In diesem Bild sieht man einen Wassersprinkler, welcher sich in der Tiefgarage der Gibb befindet. Der Hintergrund bietet eine gute Atmosphäre und einen zum Objekt passenden Kontrast."
    const f2Text = "In diesem Bild sieht man einen weiteren Wassersprinkler, welcher sich im Erdgeschoss des IET Gebäudes befindet. Die Aufnahme mit dem farbenfrohen Hintergrund der Wohnhäuser gleicht die eintönigen Farben des Objektes aus."
    const f1Text = "In diesem Bild sieht man den letzten Wassersprinkler, dieser befindet sich ebenfalls im Erdgeschoss des IET Gebäudes in Richtung der Bahngleise. Es wirkt von allen drei am düstersten, dafür wirkt es weniger bedrückend durch die Balance des Objektes gegenüber dem Hintergrund."

    return (
        <div>
            <ImageComponent image={f3} editedImage={f3Edited} description={f3Text} initX='4912' initY='3688'/>
            <ImageComponent image={f2} editedImage={f2Edited} description={f2Text} initX='4912' initY='3688'/>
            <ImageComponent image={f1} editedImage={f1Edited} description={f1Text} initX='4912' initY='3688'/>
        </div>
    )
}
