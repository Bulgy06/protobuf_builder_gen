import * as Gen1 from "./descriptor";

export class PostBuilder {
    private post: Partial<Gen1.trial.Post> = {};

    setId(id: string): this {
        // Set the value for id
        this.post.id = id;
        return this;
    }

    setUsname(usname: string): this {
        // Set the value for usname
        this.post.usname = usname;
        return this;
    }

    setContent(content: string): this {
        // Set the value for content
        this.post.content = content;
        return this;
    }

    setTimestamp(timestamp: number): this {
        // Set the value for timestamp
        this.post.timestamp = timestamp;
        return this;
    }

    build(): Gen1.trial.Post {
        // Build the message from the current state
        return Gen1.trial.Post.fromObject(this.post);
    }
}

export class UserBuilder {
    private user: Partial<Gen1.trial.User> = {};

    setId(id: string): this {
        // Set the value for id
        this.user.id = id;
        return this;
    }

    setUsname(usname: string): this {
        // Set the value for usname
        this.user.usname = usname;
        return this;
    }

    setAge(age: number): this {
        // Set the value for age
        this.user.age = age;
        return this;
    }

    setAbout(about: string): this {
        // Set the value for about
        this.user.about = about;
        return this;
    }

    setStatus(status: Gen1.trial.ActStatus): this {
        // Set the value for status
        this.user.status = status;
        return this;
    }

    setPostlist(postlist: Gen1.trial.Post[]): this {
        // Set the value for postlist
        this.user.postlist = postlist;
        return this;
    }

    setFollowercount(followercount: number): this {
        // Set the value for followercount
        this.user.followercount = followercount;
        return this;
    }

    setEmail(email: string): this {
        // Set the value for email
        this.user.email = email;
        return this;
    }

    setPhone(phone: string): this {
        // Set the value for phone
        this.user.phone = phone;
        return this;
    }

    build(): Gen1.trial.User {
        // Build the message from the current state
        return Gen1.trial.User.fromObject(this.user);
    }
}

export class UserlistBuilder {
    private userlist: Partial<Gen1.trial.Userlist> = {};

    setUsers(users: Gen1.trial.User[]): this {
        // Set the value for users
        this.userlist.users = users;
        return this;
    }

    build(): Gen1.trial.Userlist {
        // Build the message from the current state
        return Gen1.trial.Userlist.fromObject(this.userlist);
    }
}
