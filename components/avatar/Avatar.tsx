import * as Avatar from '@radix-ui/react-avatar';

export default function UserAvater (){
    return(
        <Avatar.Root className="flex items-center justify-center overflow-hidden w-12 h-12 rounded-full  border-4 border-gray-400">
            <Avatar.Image
                className="h-full w-full object-cover"
                src="/images/logo.png"
                alt="autolink" />
            <Avatar.AvatarFallback  delayMs={600}>
                KX
            </Avatar.AvatarFallback>

        </Avatar.Root>
    )
}