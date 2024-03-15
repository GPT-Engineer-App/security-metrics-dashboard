import { useState } from "react";
import { Box, Heading, Text, Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Table, Thead, Tbody, Tr, Th, Td, Switch, Image } from "@chakra-ui/react";
import { FaShieldAlt, FaServer } from "react-icons/fa";

const Index = () => {
  const [cacheEnabled, setCacheEnabled] = useState(true);

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard
      </Heading>

      <Flex justifyContent="space-between" mb={8}>
        <Stat>
          <StatLabel>WAF Events (Last 24h)</StatLabel>
          <StatNumber>1,234</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Cache Hit Ratio</StatLabel>
          <StatNumber>89%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            4.87%
          </StatHelpText>
        </Stat>
      </Flex>

      <Flex alignItems="center" mb={8}>
        <FaShieldAlt size={48} />
        <Box ml={4}>
          <Heading as="h2" size="lg">
            Web Application Firewall (WAF)
          </Heading>
          <Text>Monitor and block malicious traffic to your web applications.</Text>
        </Box>
      </Flex>

      <Table variant="simple" mb={8}>
        <Thead>
          <Tr>
            <Th>Event Type</Th>
            <Th>Count</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>SQL Injection</Td>
            <Td>532</Td>
          </Tr>
          <Tr>
            <Td>Cross-Site Scripting (XSS)</Td>
            <Td>408</Td>
          </Tr>
          <Tr>
            <Td>Malicious Bots</Td>
            <Td>294</Td>
          </Tr>
        </Tbody>
      </Table>

      <Flex alignItems="center" mb={8}>
        <FaServer size={48} />
        <Box ml={4}>
          <Heading as="h2" size="lg">
            Cache Settings
          </Heading>
          <Text>Optimize content delivery and improve website performance.</Text>
        </Box>
      </Flex>

      <Flex alignItems="center">
        <Text fontWeight="bold" mr={4}>
          Enable Caching
        </Text>
        <Switch isChecked={cacheEnabled} onChange={() => setCacheEnabled(!cacheEnabled)} />
      </Flex>

      <Image src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwZGFzaGJvYXJkfGVufDB8fHx8MTcxMDUxMDQxNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cyber Security Dashboard" mt={8} />
    </Box>
  );
};

export default Index;
