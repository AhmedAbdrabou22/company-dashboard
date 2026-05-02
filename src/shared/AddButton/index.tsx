type AddButton_TP = {
    addLabel?: string;
    action?: () => void;
    className?: string;
    disabled?: boolean;
};

export const AddButton = ({
    addLabel = "Add",
    action,
    className = "",
    disabled = false,
}: AddButton_TP) => {
    return (
        <button
            onClick={action}
            disabled={disabled}
            className={`
  inline-flex items-center gap-2
  px-5 py-2.5
  bg-[#1A2A4B] hover:bg-[#243761] active:bg-[#111d34]
  text-white text-sm font-medium
  rounded-lg
  border border-[#1A2A4B] hover:border-[#243761]
  transition-all duration-200 ease-in-out
  disabled:opacity-50 disabled:cursor-not-allowed
  shadow-sm hover:shadow-md
  select-none
  font-['Inter']
  ${className}
`}
        >

            <span>{addLabel}</span>
        </button>
    );
};