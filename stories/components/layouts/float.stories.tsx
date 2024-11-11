import type { Meta, StoryFn } from "@storybook/react"
import { Box, Center, Float, Grid, GridItem } from "@yamada-ui/react"

type Story = StoryFn<typeof Float>

const meta: Meta<typeof Float> = {
  component: Float,
  title: "Components / Layouts / Float",
}

export default meta

export const basic: Story = () => {
  return (
    <Box
      bg={["blackAlpha.50", "whiteAlpha.50"]}
      boxSize="3xs"
      position="relative"
    >
      <Float>
        <Center bg="primary" color="white" fontSize="sm" px="1.5" rounded="md">
          New
        </Center>
      </Float>
    </Box>
  )
}

export const withPlacement: Story = () => {
  const placements = [
    "start-start",
    "start-center",
    "start-end",
    "center-start",
    "center-center",
    "center-end",
    "end-start",
    "end-center",
    "end-end",
  ] as const

  return (
    <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      {placements.map((placement) => (
        <GridItem
          key={placement}
          bg={["blackAlpha.50", "whiteAlpha.50"]}
          boxSize="3xs"
          position="relative"
        >
          <Float placement={placement}>
            <Center
              bg="primary"
              color="white"
              fontSize="sm"
              px="1.5"
              rounded="md"
            >
              New
            </Center>
          </Float>
        </GridItem>
      ))}
    </Grid>
  )
}

export const withOffset: Story = () => {
  return (
    <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      <GridItem
        bg={["blackAlpha.50", "whiteAlpha.50"]}
        boxSize="3xs"
        position="relative"
      >
        <Float offset="md" placement="start-start">
          <Center
            bg="primary"
            color="white"
            fontSize="sm"
            px="1.5"
            rounded="md"
          >
            New
          </Center>
        </Float>
      </GridItem>

      <GridItem
        bg={["blackAlpha.50", "whiteAlpha.50"]}
        boxSize="3xs"
        position="relative"
      >
        <Float offset={["0", "md"]} placement="center-start">
          <Center
            bg="primary"
            color="white"
            fontSize="sm"
            px="1.5"
            rounded="md"
          >
            New
          </Center>
        </Float>
      </GridItem>

      <GridItem
        bg={["blackAlpha.50", "whiteAlpha.50"]}
        boxSize="3xs"
        position="relative"
      >
        <Float offset={["md", "0"]} placement="end-end">
          <Center
            bg="primary"
            color="white"
            fontSize="sm"
            px="1.5"
            rounded="md"
          >
            New
          </Center>
        </Float>
      </GridItem>
    </Grid>
  )
}
