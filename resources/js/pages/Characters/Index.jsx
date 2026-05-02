import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Index({ characters }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        clan: '',
        generation: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/characters', { onSuccess: () => reset() });
    };

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <h1>База персонажів</h1>
            
            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Ім'я:</label>
                    <input 
                        type="text" 
                        value={data.name} 
                        onChange={e => setData('name', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Клан:</label>
                    <input 
                        type="text" 
                        value={data.clan} 
                        onChange={e => setData('clan', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.clan && <span style={{ color: 'red' }}>{errors.clan}</span>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Покоління/Рівень:</label>
                    <input 
                        type="number" 
                        value={data.generation} 
                        onChange={e => setData('generation', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.generation && <span style={{ color: 'red' }}>{errors.generation}</span>}
                </div>
                <button type="submit" disabled={processing}>Створити персонажа</button>
            </form>

            <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr><th>ID</th><th>Ім'я</th><th>Клан</th><th>Покоління</th></tr>
                </thead>
                <tbody>
                    {characters && characters.length > 0 ? (
                        characters.map((char) => (
                            <tr key={char.id}>
                                <td>{char.id}</td>
                                <td>{char.name}</td>
                                <td>{char.clan}</td>
                                <td>{char.generation}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4" style={{ textAlign: 'center' }}>Немає записів</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}