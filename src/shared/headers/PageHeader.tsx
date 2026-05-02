type PageHeader_TP = {
    breadcrumb?: string;
    title: string;
};

export const PageHeader = ({ breadcrumb, title }: PageHeader_TP) => {
    return (
        <div>
            {breadcrumb && (
                <p className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-0.5">
                    {breadcrumb}
                </p>
            )}

            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                {title}
            </h1>
        </div>
    );
};