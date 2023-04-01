import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Center, Text } from "@chakra-ui/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Box w="100%" h="100vh">
            <Center>
                <Text>
          TaskMania
                </Text>
            </Center>
        </Box>
    );
}
