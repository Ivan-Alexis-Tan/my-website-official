import GitHubLogo from "../../svgs/logos/GitHubLogo";
import type React from "react";
import LinkedinLogo from "../../svgs/logos/LinkedinLogo";

export default function Sec5ContactsAndLinks() {
    return (
        <div className="p-5 bg-(--accent-border) rounded-2xl">
            <div className="mb-5 gap-3 flex items-center *:text-white">
                <svg className="w-10 h-10"><use href="/icons.svg#globe" /></svg>
                <h1 className="text-4xl font-bold">Contacts and Links</h1>
            </div>

            <div className="gap-5 flex flex-wrap justify-evenly">
                <ContactsAndLinksCard 
                    header="Linkedin"
                    subHeader="View Linkedin"
                    icon={<LinkedinLogo />}
                    redirectTo="https://www.linkedin.com/in/ivan-alexis-tan-a64366287/"
                />

                <ContactsAndLinksCard 
                    header="Gmail"
                    subHeader="Send an email"
                    icon={<svg><use href="icons.svg#gmail" /></svg>}
                    redirectTo="https://mail.google.com/mail/?view=cm&fs=1&to=contact.tanivanalexis@gmail.com"
                />

                <ContactsAndLinksCard
                    header="GitHub"
                    subHeader="View GitHub Repo"
                    icon={<GitHubLogo className="text-white" />}
                    redirectTo="https://github.com/Ivan-Alexis-Tan?tab=repositories"
                />
            </div>
        </div>
    )
}

type ContactsAndLinksCardProps = {
    header: string
    subHeader: string
    icon: React.ReactNode
    redirectTo: string
    className?: string
}

const ContactsAndLinksCard = ({
    header,
    subHeader,
    icon,
    redirectTo,
    className,
}: ContactsAndLinksCardProps) => {
    return (
    <a href={redirectTo}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className ?? ""} p-5 w-50 flex flex-col items-center border border-transparent rounded-2xl text-white hover:border-(--accent) hover:[&_h2]:text-(--accent) [&_svg]:w-10 [&_svg]:h-10`}
    >
        {icon}
        <h2 className="text-2xl font-bold">{header}</h2>
        <p className="text-center underline-offset-5">{subHeader}</p>
    </a>
    )
}