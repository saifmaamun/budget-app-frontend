import React from 'react';
import { Button, Container, Stack } from 'react-bootstrap';
import BudgetCards from '../BudgetCards/BudgetCards';

const Heading = () => {
    return (
        <Container className="mt-5">
            <Stack direction="horizontal" className="mb-5" gap={3}>
                <h1 className="me-auto">Budget</h1>
                <Button variant="secondary">Add Budget</Button>
                <Button variant="outline-secondary">Add Expense</Button>
            </Stack>
            <BudgetCards/>
        </Container>
    );
};

export default Heading;