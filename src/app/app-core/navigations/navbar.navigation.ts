export const NAVBAR_NAVIGATION: NavbarNavigation[] = [
    {link: '', title: 'Home'},
    {link: 'about-us', title: 'About Us'},
    {link: 'project-components', title: 'Project Components'},
    {link: 'news-and-updates', title: 'News & Updates'},
    {link: 'contact-us', title: 'Contact Us'},
]

export interface NavbarNavigation {
    title: string
    link: string
}
