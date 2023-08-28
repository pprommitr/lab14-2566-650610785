"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />

      <Button color="orange" mt="xs">
        Submit Review
      </Button>

      <Divider mt="sm" />

      <Group mt="sm" position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating size="sm" value={5} readOnly />
      </Group>

      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider mt="sm" />

      <Group mt="sm" position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating size="sm" value={4} readOnly />
      </Group>

      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination total={20} mt="md" position="center" color="orange" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Pinnaree Prommitr 650610785
      </Text>
    </Container>
  );
}
