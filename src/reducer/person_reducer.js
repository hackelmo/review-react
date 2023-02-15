export default function personReducder(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) =>
          mentor.name === prev ? { ...mentor, name: current } : mentor
        ),
      };
    }
    case "added": {
      const { name, title } = action;
      return { ...person, mentors: [...person.mentors, { name, title }] };
    }

    case "deleted": {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }
    default: {
      throw Error(`알수없는 에러 타입이다:${action.type}`);
    }
  }
}