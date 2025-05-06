// create a footer component

import { DefaultContainer } from "../layouts/default-container";
import { Icons } from "../ui/icons";

export function Footer() {
    return (
        <DefaultContainer>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Icons.logo />
                    <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </DefaultContainer>
    )
}
