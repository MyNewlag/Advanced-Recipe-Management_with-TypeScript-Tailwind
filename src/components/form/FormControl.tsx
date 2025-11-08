import File from "./File";
import Input from "./Input";
import TextArea from "./TextArea";

type FormControlProps = {
  control: 'input' | 'textarea' | 'file';
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  [key: string]: any; // برای سایر propsها مثل onChange یا value
};

const FormControl = (props: FormControlProps) => {
  switch (props.control) {
    case 'input':
      return <Input {...props} />;

    case 'textarea':
      return <TextArea {...props} />;

    case 'file':
      return <File {...props} />;

    default:
      return null;
  }
};

export default FormControl;
