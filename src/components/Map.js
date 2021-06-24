import {AspectRatio} from '@chakra-ui/layout';
import {Box} from '@chakra-ui/react';
const Map = () => {
    return (
        <div>
        <AspectRatio ratio={16 / 9}>
            <Box
            as="iframe"
            src="https://maps.google.com/maps?q=upes&t=&z=13&ie=UTF8&iwloc=&output=embed"
            alt="demo"
            />
          </AspectRatio>
        </div>
    )
}

export default Map;