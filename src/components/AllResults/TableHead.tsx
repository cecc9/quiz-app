import { Text, Thead, Tr, Th, Center } from '@chakra-ui/react';

const TableHead = () => {
    return (
        <Thead>
            <Tr>
                <Th>
                    <Center>
                        <Text fontSize='md' color='whiteAlpha.900' p={4}>
                            Code
                        </Text>
                    </Center>
                </Th>
                <Th>
                    <Center>
                        <Text fontSize='md' color='whiteAlpha.900' p={4}>
                            Respuesta correcta
                        </Text>
                    </Center>
                </Th>
                <Th>
                    <Center>
                        <Text fontSize='md' color='whiteAlpha.900' p={4}>
                            Respuesta del Usuario
                        </Text>
                    </Center>
                </Th>
            </Tr>
        </Thead>
    );
};

export default TableHead;
