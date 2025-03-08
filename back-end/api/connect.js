import { MongoClient } from 'mongodb';

const URI = 'mongodb+srv://user:czE4ewvNAT238G1n@cluster0.pqijn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(URI);

export const db = client.db('spotifyClone'); //nome da coleção do bd