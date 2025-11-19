export interface  ExampleInterface {
    id: number;
    name: string;
}

export interface CardProps {
   title: string;
   content: string; 
}

export interface ButtonProps {
  ize?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  children: React.ReactNode;  
}