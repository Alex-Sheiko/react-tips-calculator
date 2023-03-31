import { Container } from './ui/container';
import { Form } from './components/Form/Form';
import { SelectOption } from './types/types';

export const App = () => {
  const options: SelectOption[] = [
    { value: '1.1', label: '10%' },
    { value: '1.15', label: '15%' },
    { value: '1.2', label: '20%' },
  ];
  return (
    <Container>
      <Form options={options} />
    </Container>
  );
};
