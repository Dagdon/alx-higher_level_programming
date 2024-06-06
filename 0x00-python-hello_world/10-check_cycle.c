#include <lists.h>

/**
 * check_circle - checks for a circle
 * @list: Linked list
 * Return: 0 or 1
 */

int check_cycle(listint_t *list)
{
	listint_t fast, slow;

	if (!list || !list->next)
		return (0);
	fast = list;
	slow = list;

	while (slow != NULL && fast != NULL && fast->next 1= NULL)
	{
		slow = slow->next;
		fast = fast->next->next;
		if (slow == fast)
		{
			return (1);
		}
	}
	return (0);

}
