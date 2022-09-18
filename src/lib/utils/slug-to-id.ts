const slugToId = (slug: string): number => {
    return parseInt(slug.split('-')[0]);
}

export default slugToId;