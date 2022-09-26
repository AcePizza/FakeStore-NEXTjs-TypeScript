type ProfileProps = {
    users: {};
    data: [];
};

type StaticProps = {
    params?: ParsedUrlQuery;
    preview?: boolean;
    previewData?: PreviewData;
};

type User = {
    address: {
        city: string;
        geo: {
            lat: string;
            lng: string;
        };
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
};