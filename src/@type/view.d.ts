interface IconT{
	name: any;
	size: number;
	color: string;
	style?: any;
};

interface CardItemT {
    description?: string;
    hasActions?: boolean;
    hasVariant?: boolean;
    image: any;
    isOnline?: boolean;
    matches?: string;
    name: string;
    onGoBackPress: () => void;
    onRejectPress: () => void;
    onHeartPress: () => void;
};